import actions from './actions'

const initialState = {
  id : '',
  name : '',
  email : '',
  pictures : {
    picture_1 : '',
    picture_2 : '',
  },
  intro : '',
  social : {
    linkedin : '',
    facebook : '',
    instagram : '',
    medium : '',
    twitter : ''
  },
  resume : {
    pdf : '',
    professional : {
      professional_1 : {
        position : '',
        date : '',
        company : '',
        link : ''
      },
    },
    leadership : {
      leadership_1 : {
        position : '',
        date : '',
        company : '',
        link : '',
      },
    },
    coursework : {
      course_1 : '',
    },
    other : {
      other_1 : ''
    }
  },
  references : {
    reference_1 : {
      quote : '',
      person : ''
    }
  },
  articles : {
    article_1 : {
      title : '',
      caption : '',
      link : '',
    }
  },
  authorized: false,
  loading: false,
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
