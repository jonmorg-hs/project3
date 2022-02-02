import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { removeBlastId } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_BLAST } from "../utils/mutations";

const SavedBlasts = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBlast, { error }] = useMutation(REMOVE_BLAST);
  const userData = data?.me || {};

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBlast = async (blastId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBlast({
        variables: { blastId },
      });

      removeBlastId(blastId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Active Blasts</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBlasts.length
            ? `Viewing ${userData.savedBlasts.length} saved ${
                userData.savedBlasts.length === 1 ? "blast" : "blasts"
              }:`
            : "You have no saved blasts!"}
        </h2>
        <CardColumns>
          {userData.savedBlasts.map((blast) => {
            return (
              <Card key={blast.bookId} border="dark">
                {blast.image ? (
                  <Card.Img
                    src={blast.image}
                    alt={`The cover for ${blast.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{blast.title}</Card.Title>
                  <p className="small">Authors: {blast.authors}</p>
                  <Card.Text>{blast.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBlast(blast.bookId)}
                  >
                    Delete this Blast!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBlasts;
