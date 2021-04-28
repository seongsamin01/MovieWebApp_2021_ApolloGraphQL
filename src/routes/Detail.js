import React from "react";
import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            language
            rating
            medium_cover_image
            description_intro
        }
    }
`;

const Container = styled.div``;

const Column = styled.div``;

const Title = styled.h1``;

const Subtitle = styled.h4``;

const Description = styled.p``;

const Poster = styled.div``;


export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: +id },
    });
    return (
        <Container>
            <Column>
                <Title>Name</Title>
                <Subtitle>English ` 4.5</Subtitle>
                <Description>hakunamatata</Description>
            </Column>
            <Poster></Poster>
        </Container>
    );
};