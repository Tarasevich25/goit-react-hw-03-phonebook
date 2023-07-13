import PropTypes from 'prop-types';
import css from './PhonebookForm.module.css';
import { Component } from 'react';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;   
    const contact = { name, number };
    this.props.onSubmit(contact);
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          placeholder="Name"
        />
        <label className={css.label} htmlFor="number">
          Phone number:
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          placeholder="Phone number"
        />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
};

PhonebookForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default PhonebookForm;