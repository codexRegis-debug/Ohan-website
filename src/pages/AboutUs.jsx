/**/
import { useReducer, useState, useEffect } from 'react';
import AnimeBox from '../animeanimations/AnimeBox.jsx';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const AboutUs = () => {
  const initialStories = [
    {
      title: 'React ',
      url: 'https://react.dev',
      author: 'Jordan Walke ',
      numComments: 3,
      point: 4,
      objectID: 0,
    },
    {
      title: 'Redux ',
      url: 'https://redux.js.org',
      author: 'Dan Abramov ',
      numComments: 2,
      point: 5,
      objectID: 1,
    },
  ];

  const getAsyncStories = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { stories: initialStories } })
      }, 2000);
    });
  }

  const storiesReducer = (state, action) => {
    switch (action.type) {
      case ('STORIES_FETCH_INIT') :
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case ('STORIES_FETCH_SUCCESS'):
        return {
          ...state,
          isError: false,
          data: action.payload,
        }
      case ('STORIES_FETCH_FAILURE'):
        return {
          ...state,
          isLoading: false,
          isError: true,
        }
      case ('REMOVE_STORIES'):
        return{
          ...state,
          data: state.data.filter(
            (story) => { action.payload.objectID !== story.objectID }
          ),
        }
      default :
        throw new Error();
    }
  };

  const [searchItems, setSearchItems] = useState('React');
  const [stories, dispatchStories] = useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );


  useEffect(() => {

    if (!searchItems) return;

    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    fetch(`${API_ENDPOINT}${searchItems}`)
    .then((response) => {response.json()})
    .then((result) => {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.hits,
      });
    })
    .catch(() => {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    });
  }, [searchItems]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORIES',
      payload: item,
    });
  };

  const handleChange = (event) => {
    console.log(event);
    setSearchItems(event.target.value);

    props.onSearch(event)
    // Callback handler to the Search component
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
  };


  const searchedStories = stories.data.filter(function (story) {
    return story.title.toLowerCase().includes(searchItems.toLowerCase())
  });

  return (
    <>
      <div style={{display: 'flex',  paddingTop:'300px', color:'white'}}>
        <h1>
        About us
        </h1>
        <br/>
      </div>
      <InputWithLabel
        id='search'
        search={searchItems}
        onInputChange={handleSearch}
      >
        <strong> Search: </strong>
      </InputWithLabel>
      <hr/>

      {stories.isError && <p>Something went wrong ...</p>}

      {
        stories.isLoading ? (
          <p>Loading ...</p>
        ) : (
          <List list={stories.data} onRemoveItem={handleRemoveStory}/>
        )
      }
      <List
        list={searchedStories}
        onRemoveItem={handleRemoveStory}
      />
    </>
  );
}

const InputWithLabel = ({
  id,
  children,
  type='text',
  value,
  onInputChange,
}) => {

  return (
    <div style={{display: 'flex',  paddingTop:'10px', color:'white'}}>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        type={type}
        value={value}
        autoFocus={true}
        onChange={onInputChange}
      />
    </div>
  );
}


const List = ({ list, onRemoveItem }) => {
  return (
    <div style={{display: 'flex', paddingTop:'100px', color:'white'}}>
      <ul >
        {
          list.map(function (item) {
            return (
              <Item
                key={item.objectID}
                item={item}
                onRemoveItem={onRemoveItem}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

const Item = ({ item, onRemoveItem }) => {

  return (
    <li>
      <span>
        <a href={item.url}>
          {item.title }
        </a>
      </span>
      <span>{item.author}</span>
      <span>{item.numComments}</span>
      <span>{item.points}</span>
      <span>
        <button
          type='button'
          onClick={() => { onRemoveItem(item) }}
          style={{ margin: '4px', borderRadius: '6px', cursor: 'pointer' }}
        >
          Dismiss
        </button>
      </span>
    </li>
  );
}

export default AboutUs
