import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { times, pullAllBy } from "lodash";
import Modal from "react-modal";
import styles from "./style";
import search from "../../search.png";
import cute from "../../cute.png";
import pokedexAPI from "../../api/pokedex";
import ProgressBar from "../../components/ProgressBar";
import { action } from "../../stores/store";

const statCal = (card) => {
  const { attacks, weaknesses } = card;
  const hp = Math.min(Number(card.hp) || 0, 100);
  const str = attacks ? Math.min(attacks.length * 50, 100) : 0;
  const weak = weaknesses ? Math.min(weaknesses.length * 100, 100) : 0;
  const damage = attacks
    ? attacks.reduce(
        (acc, cur) => acc + Number(cur.damage.replace(/\D/g, "")),
        0
      )
    : 0;
  const hapiness = Math.min(hp / 10 + damage / 10 + 10 - weak / 5, 5);

  return {
    hp,
    str,
    weak,
    hapiness,
  };
};

const Pokedex = (props) => {
  const inputRef = useRef(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchPokedex, setSearchPokedex] = useState([]);
  const onOpenModal = async () => {
    setIsShowModal(true);
    try {
      const res = await pokedexAPI.getPokedex();
      const cards = res.cards;
      pullAllBy(cards, props.myDex, "id");
      setSearchPokedex(cards);
    } catch (err) {
      setIsShowModal(false);
    }
  };

  const onAddCard = (card) => () => {
    props.addCard(card);
    const newList = searchPokedex.filter((item) => item.id !== card.id);
    setSearchPokedex(newList);
  };

  const onRemoveCard = (card) => () => {
    props.removeCard(card);
  };

  const onCloseModal = () => {
    setIsShowModal(false);
  };

  const onSearch = async () => {
    const res = await pokedexAPI.getPokedex(inputRef.current.value);
    const cards = res.cards;
    pullAllBy(cards, props.myDex, "id");
    setSearchPokedex(cards);
  };
  const RenderMyCard = ({ card }) => {
    const { hp, str, weak, hapiness } = statCal(card);
    return (
      <div className={styles.myCardContainer}>
        <img className={styles.cardImage} src={card.imageUrl} alt={card.id} />
        <div className={styles.cardInfo}>
          <h3 className={styles.name}>{card.name}</h3>
          <ProgressBar label="HP" percent={hp} />
          <ProgressBar label="STR" percent={str} />
          <ProgressBar label="WEAK" percent={weak} />
          <div className={styles.hapinessContainer}>
            {times(hapiness).map((number) => (
              <img
                className={styles.hapiness}
                key={number}
                src={cute}
                alt={number}
              />
            ))}
          </div>
        </div>
        <div className={styles.xContainer}>
          <h2 onClick={onRemoveCard(card)}>X</h2>
        </div>
      </div>
    );
  };

  const RenderSearchCard = ({ card }) => {
    const { hp, str, weak, hapiness } = statCal(card);
    return (
      <div className={styles.searchCardContainer}>
        <img className={styles.cardImage} src={card.imageUrl} alt={card.id} />
        <div className={styles.cardInfo}>
          <h3 className={styles.name}>{card.name}</h3>
          <ProgressBar label="HP" percent={hp} />
          <ProgressBar label="STR" percent={str} />
          <ProgressBar label="WEAK" percent={weak} />
          <div className={styles.hapinessContainer}>
            {times(hapiness).map((number) => (
              <img
                className={styles.hapiness}
                key={number}
                src={cute}
                alt={number}
              />
            ))}
          </div>
        </div>
        <div className={styles.searchAddContainer}>
          <h2 onClick={onAddCard(card)}>Add</h2>
        </div>
      </div>
    );
  };

  return (
    <div id="container" className={styles.container}>
      <div className={styles.header}>
        <h1>My Pokedex</h1>
      </div>
      <div className={styles.content}>
        {props.myDex.map((card) => (
          <RenderMyCard key={card.id} card={card} />
        ))}
      </div>
      <div className={styles.footer}>
        <button onClick={onOpenModal}>+</button>
      </div>
      {/* MODAL */}
      <Modal
        isOpen={isShowModal}
        onRequestClose={onCloseModal}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
        parentSelector={() => document.getElementById("container")}
      >
        <div className={styles.search}>
          <input ref={inputRef} type="text" placeholder="Find Pokemon" />
          <img src={search} alt="search" onClick={onSearch} />
        </div>
        <div className={styles.searchedContent}>
          {searchPokedex.map((card) => (
            <RenderSearchCard key={card.id} card={card} />
          ))}
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { ...action };

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
