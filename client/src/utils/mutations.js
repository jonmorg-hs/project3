import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        blastCount
        savedBlasts {
          blastId
          blastName
        }
      }
    }
  }
`;

export const SAVE_BLAST = gql`
  mutation saveBlast($newBlast: InputBlast!) {
    saveBlast(newBlast: $newBlast) {
      _id
      username
      email
      savedBlasts {
        blastId
        blastName
      }
    }
  }
`;

export const REMOVE_BLAST = gql`
  mutation removeBlast($blastId: ID!) {
    removeBlast(blastId: $blastId) {
      _id
      username
      email
      savedBlasts {
        blastId
        blastName
      }
    }
  }
`;
