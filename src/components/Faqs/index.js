import FaqItem from '../Faqitem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container1">
      <div className="faqs-container1">
        <h1 className="heading1">React</h1>
        <ul className="faqs-list1">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
