import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { saveBlastIds, getSavedBlastIds } from "../utils/localStorage";
import { useMutation } from "@apollo/client";
import { SAVE_BLAST } from "../utils/mutations";

const SearchBlasts = () => {
  const [searchedBlasts, setSearchedBlasts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedBlastIds, setSavedBlastIds] = useState(getSavedBlastIds());

  const [saveBlast, { error }] = useMutation(SAVE_BLAST);

  useEffect(() => {
    return () => saveBlastIds(savedBlastIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const { items } = await response.json();

      const blastData = items.map((blast) => ({
        blastId: blast.id,
        blastName: blast.volumeInfo.description,
      }));

      setSearchedBlasts(blastData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveBlast = async (blastId) => {
    const blastToSave = searchedBlasts.find(
      (blast) => blast.bookId === blastId
    );
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveBlast({
        variables: { newBlast: { ...blastToSave } },
      });

      setSavedBlastIds([...savedBlastIds, blastToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a book"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedBlasts.length
            ? `Viewing ${searchedBlasts.length} results:`
            : "Search for a book to begin"}
        </h2>
        <CardColumns>
          {searchedBlasts.map((blast) => {
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
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBlastIds?.some(
                        (savedBlastId) => savedBlastId === blast.bookId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveBlast(blast.bookId)}
                    >
                      {savedBlastIds?.some(
                        (savedBlastId) => savedBlastId === blast.bookId
                      )
                        ? "This book has already been saved!"
                        : "Save this Book!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchBlasts;
