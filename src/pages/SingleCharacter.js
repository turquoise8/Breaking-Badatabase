import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.breakingbadapi.com/api/characters/";

const SingleCharacter = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(null);
  const {redirect, setRedirect} = useGlobalContext()

  useEffect(() => {
    setRedirect(false);
  }, []);


  useEffect(() => {
    setLoading(true);
    const getCharacter = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data) {
          console.log(data[0])
          
          const {
            char_id,
            occupation,
            name,
            birthday,
            img,
            nickname,
            appearance,
            portrayed,
          } = data[0];
          const newCharacter = {
            char_id,
            occupation,
            name,
            birthday,
            img,
            nickname,
            appearance,
            portrayed,
          };
          setCharacters(newCharacter);
        } else {
          setCharacters(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacter();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!characters) {
    return <h2>No person to display</h2>;
  }

  const {name, birthday, img, nickname, appearance, portrayed, occupation } =
    characters;

  return (
    <section className="section character-section">
      <h2 className="section-title">{name}</h2>
      <div className="person">
        <img src={img} alt="" />
        <div className="person-info">
          <p>
            <span className="person-data">name:</span>
            {name}
          </p>
          <p>
            <span className="person-data">nickname:</span>
            {nickname}
          </p>
          <p>
            <span className="person-data">occupation:</span>
            {occupation.join(', ')}
          </p>
          <p>
            <span className="person-data">birthday:</span>
            {birthday}
          </p>
          <p>
            <span className="person-data">portrayed by:</span>
            {portrayed}
          </p>

          <p>
            <span className="person-data">appears in seasons:</span>
            {appearance.join(", ")}
          </p>
        </div>
      </div>

      <Link to="/" className="btn">
        Back Home?
      </Link>
    </section>
  );
};

export default SingleCharacter;
