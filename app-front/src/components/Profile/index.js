import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { Rating, Modal, Button, Icon, Header } from "semantic-ui-react";

// import des composants

import "./style.scss";

const Profile = ({
  changeFieldComment,
  handleNewReview,
  userName,
  content,
  rate,
  newReview,
  sendDeleteAccount,
}) => {
  const handleReviewSubmit = (event) => {
    event.preventDefault();
    handleNewReview();
  };
  const [open, setOpen] = React.useState(false);
  const handleReviewChange = (event) => {
    changeFieldComment(event.target.value, event.target.name);
  };
  console.log("redirect to home ", newReview.redirectToHome);
  if (newReview.redirectToHome) {
    return <Redirect to="/" />;
  };

  const handleDeleteAccount = (event) => {
    event.preventDefault();
    sendDeleteAccount();
  };

  return (
    <div className="profile_container">
      <label className="profile_label">Laisser un commentaire</label>
      <form className="profile_form" onSubmit={handleReviewSubmit}>
        <div>
          <textarea
            className="profile_textarea"
            type="text"
            name="content"
            required
            minLength="4"
            maxLength="50"
            size="10"
            placeholder={`Crache le morceau ${userName}`}
            value={content}
            onChange={handleReviewChange}
          />
          <div>
            <input
              className="admin_input"
              type="number"
              name="rate"
              placeholder="Note attribuée"
              value={rate}
              onChange={handleReviewChange}
              max="5"
              required
            />
          </div>
          <button type="submit" className="send_comment">
            Envoyer
          </button>
        </div>
      </form>
      <div>
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
          trigger={
        <button className="delete_button">Supprimer mon compte</button>
          }
        >
          <form onSubmit={handleDeleteAccount}>
            <Header icon>
              <Icon name="archive" />
              Vous êtes sur le point de supprimer votre compte! Réfléchissez bien,
              cette action est irrémédiable.
            </Header>
            <Modal.Content>
              <p>Voulez-vous vraiment nous quitter ?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="red" inverted onClick={() => setOpen(false)}>
                <Icon name="remove" /> NON
              </Button>
              <Button type="submit" color="green" inverted >
                <Icon name="checkmark" /> oui
              </Button>
            </Modal.Actions>
          </form>
        </Modal>
      </div>
    </div>
  );
};

Profile.propTypes = {
  changeFieldComment: PropTypes.func.isRequired,
  handleNewReview: PropTypes.func.isRequired,
  userName: PropTypes.string,
  content: PropTypes.string,
  rate: PropTypes.number,
  newReview: PropTypes.object,
};

export default Profile;
