import React from 'react';
import { mount } from 'enzyme';

import AddMovie from './AddMovie';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

let wrapper;
let props;

const addMovie = () => {
  if (!wrapper) {
    wrapper = mount(<AddMovie onClick={props.onClick} />);
  }
  return wrapper;
};

const beforeEachUnitTest = () => {
  wrapper = undefined;
  props = { onClick: jest.fn() };
};

describe('<AddMovie /> component', () => {
  beforeEach(() => beforeEachUnitTest());

  it('renders without crashing', () => {
    addMovie();
  });

  it('renders a form', () => {
    expect(addMovie().find('form').length).toEqual(1);
  });
});

describe('<AddMovie /> component initial state', () => {
  beforeEach(() => beforeEachUnitTest());

  it('sets expected initial state', () => {
    expect(addMovie().state()).toEqual(initialState);
  });
});

describe('<AddMovie /> component Form', () => {
  beforeEach(() => beforeEachUnitTest());

  it('renders a form', () => {
    expect(addMovie().find('form').length).toEqual(1);
  });
});

describe('<AddMovie /> component title input', () => {
  beforeEach(() => beforeEachUnitTest());

  const titleInput = () => addMovie().find('form input[type="text"]').at(0);

  it('renders a text input so as the user can type the movie title', () => {
    expect(titleInput().exists()).toBeTruthy();
  });

  it('renders the label "Título" for the movie title input', () => {
    expect(addMovie().find('label').at(0).text()).toEqual('Título');
  });

  it('the title input initial value, "", comes from the AddMovie initial state, via "title"', () => {
    expect(titleInput().prop('value')).toEqual(initialState.title);
  });

  it('updates the component state when title input changes', () => {
    const simulatedEvent = { target: { value: 'my awesome movie title', name: 'title'  } };

    titleInput().simulate('change', simulatedEvent);
    expect(addMovie().state('title')).toEqual('my awesome movie title');
  });
});

describe('<AddMovie /> component subtitle input', () => {
  beforeEach(() => beforeEachUnitTest());

  const subtitleInput = () => addMovie().find('form input[type="text"]').at(1);

  it('renders a subtitle input so as the user can type the movie subtitle', () => {
    expect(subtitleInput().exists()).toBeTruthy();
  });

  it('renders the label "Subtítulo" for the movie subtitle input', () => {
    expect(addMovie().find('label').at(1).text()).toEqual('Subtítulo');
  });

  it('the subtitle input initial value, "", comes from the AddMovie initial state, via "subtitle"', () => {
    expect(subtitleInput().prop('value')).toEqual(initialState.subtitle);
  });

  it('updates the component state when subtitle input changes', () => {
    const simulatedEvent = { target: { value: 'my awesome movie subtitle', name: 'subtitle'  } };

    subtitleInput().simulate('change', simulatedEvent);
    expect(addMovie().state('subtitle')).toEqual('my awesome movie subtitle');
  });
});

describe('<AddMovie /> component image path input', () => {
  beforeEach(() => beforeEachUnitTest());

  const imageInput = () => addMovie().find('form input[type="text"]').at(2);

  it('renders an image input so as the user can type the movie image path', () => {
    expect(imageInput().exists()).toBeTruthy();
  });

  it('renders the label "Imagem" for the movie image path input', () => {
    expect(addMovie().find('label').at(2).text()).toEqual('Imagem');
  });

  it('the image input initial value, "", comes from the AddMovie initial state, via "imagePath"', () => {
    expect(imageInput().prop('value')).toEqual(initialState.imagePath);
  });

  it('updates the component state when image path input changes', () => {
    const simulatedEvent = { target: { value: 'http://localhost:3000/images/Appleseed_Alpha.jpg', name: 'imagePath'  } };

    imageInput().simulate('change', simulatedEvent);
    expect(addMovie().state('imagePath')).toEqual('http://localhost:3000/images/Appleseed_Alpha.jpg');
  });
});

describe('<AddMovie /> component storyline input', () => {
  beforeEach(() => beforeEachUnitTest());

  const storylineInput = () => addMovie().find('form textarea');

  it('renders a storyline input so as the user can type the movie storyline', () => {
    expect(storylineInput().length).toEqual(1);
  });

  it('renders the label "Sinopse" for the movie storyline input', () => {
    expect(addMovie().find('label').at(3).text()).toEqual('Sinopse');
  });

  it('the storyline input initial value, "", comes from the AddMovie initial state, via "storyline"', () => {
    expect(storylineInput().prop('value')).toEqual(initialState.storyline);
  });

  it('updates the component state when movie storyline input changes', () => {
    const simulatedEvent = { target: { value: 'In the following movie, everyone dies.', name: 'storyline'  } };

    storylineInput().simulate('change', simulatedEvent);
    expect(addMovie().state('storyline')).toEqual('In the following movie, everyone dies.');
  });
});

describe('<AddMovie /> component rating input', () => {
  beforeEach(() => beforeEachUnitTest());

  const ratingInput = () => addMovie().find('form input[type="number"]');

  it('renders a rating input so as the user can type the movie rating', () => {
    expect(ratingInput(addMovie()).length).toEqual(1);
  });

  it('renders the label "Avaliação" for the movie rating input', () => {
    expect(addMovie().find('label').at(4).text()).toEqual('Avaliação');
  });

  it('the rating input initial value, 0, comes from the AddMovie initial state, via "rating"', () => {
    expect(ratingInput().prop('value')).toEqual(initialState.rating);
  });

  it('updates the component state when movie rating input changes', () => {
    const simulatedEvent = { target: { value: '1.5', name: 'rating'  } };

    ratingInput().simulate('change', simulatedEvent);
    expect(addMovie().state('rating')).toEqual(1.5);
  });
});

describe('<AddMovie /> component genre selection', () => {
  beforeEach(() => beforeEachUnitTest());

  const genreOptions = [
    { value: 'action', text: 'Ação' },
    { value: 'comedy', text: 'Comédia' },
    { value: 'thriller', text: 'Suspense' },
  ];

  const genreSelection = () => addMovie().find('form select');

  it('renders a movie genre selection so as the user can select the movie genre', () => {
    expect(genreSelection().length).toEqual(1);
  });

  it('renders the label "Gênero" for the movie genre selection', () => {
    expect(addMovie().find('label').at(5).text()).toMatch('Gênero');
  });

  it('renders all genre options inside the selection with expected text and values', () => {
    const options = genreSelection().find('option');

    expect(options.length).toEqual(genreOptions.length);
    options.forEach((option, index) => {
      expect(option.text()).toEqual(genreOptions[index].text);
      expect(option.props().value).toEqual(genreOptions[index].value);
    });
  });

  it('the genre selection initial value, "action", comes from the AddMovie initial state, via "genre"', () => {
    expect(genreSelection(addMovie()).prop('value')).toEqual(initialState.genre);
  });

  it('updates the component state when movie genre selection changes', () => {
    const givenGenre = genreOptions[0];
    const simulatedEvent = { target: { value: givenGenre, name: 'genre'  } };

    genreSelection().simulate('change', simulatedEvent);
    expect(addMovie().state('genre')).toEqual(givenGenre);
  });
});

describe('<AddMovie /> component creation button', () => {
  beforeEach(() => beforeEachUnitTest());

  const button = () => addMovie().find('form button');
  const currentState = {
    subtitle: 'Magical subtitle',
    title: 'Harry Potter I',
    imagePath: '',
    storyline: 'The boy who lived.',
    rating: 3.5,
    genre: 'action',
  };

  it('has "Adicionar filme" as content', () => {
    expect(button().text()).toEqual('Adicionar filme');
  });

  it('calls `onClick` received as props from AddMovie, using its current state as parameter', () => {
    addMovie().setState(currentState);

    button().simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(currentState);
  });

  it('resets AddMovie to its initial state when clicked by the user', () => {
    addMovie().setState(currentState);

    expect(addMovie().state()).toEqual(currentState);

    button().simulate('click');

    expect(addMovie().state()).toEqual(initialState);
  });
});
