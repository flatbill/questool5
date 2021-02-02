/* Api methods to call /functions */

const create = (data) => {
  return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAll = () => {
  return fetch('/.netlify/functions/todos-read-all').then((response) => {
    return response.json()
  })
}

const update = (todoId, data) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteTodo = (todoId) => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const batchDeleteTodo = (todoIds) => {
  return fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtRead01 = (todoId, data) => {
  return fetch(`/.netlify/functions/qtRead01/${todoId}`, {
    body: JSON.stringify(data),
    //method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtRead02 = (todoId, data) => {
  return fetch(`/.netlify/functions/qtRead02/${todoId}`, {
    body: JSON.stringify(data),
    //method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtRead03 = (faunaRecId, data) => {
  //return fetch(`/.netlify/functions/qtRead03/${todoId}`, {
    return fetch(`https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtRead03/${faunaRecId}`, {
    body: JSON.stringify(data),
    //method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtWriteAnswer = (data) => {
  return fetch(`https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtWriteAnswer`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtWriteQuestion = (data) => {
  return fetch(`https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtWriteQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtDeleteQuestion = (data) => {
  return fetch(`https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtDeleteQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtReadQuestions = (custParmIn,qidParmIn) => {
  let myUrl =  'https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtReadQuestions'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadSubsets = (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtReadSubsets'
  +'?cust=' + custParmIn
  +'&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadRules= (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtReadRules'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}

const qtWriteScore = (data) => {
  return fetch(`https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtWriteScore`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtMassDeleteAnswers = (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtMassDeleteAnswers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}
const qtMassDeleteScores = (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://stupefied-elion-621b07.netlify.app/.netlify/functions/qtMassDeleteScores'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}
export default  {
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo,
  qtRead01: qtRead01,
  qtRead02: qtRead02,
  qtRead03: qtRead03,
  qtWriteQuestion: qtWriteQuestion,
  qtDeleteQuestion: qtDeleteQuestion,
  qtWriteAnswer: qtWriteAnswer,
  qtReadQuestions: qtReadQuestions,
  qtReadSubsets: qtReadSubsets,
  qtWriteScore: qtWriteScore,
  qtReadRules: qtReadRules,
  qtMassDeleteAnswers: qtMassDeleteAnswers,
  qtMassDeleteScores: qtMassDeleteScores,

}

