import Tabs from "@elements/tabs"
import Dropdown from "@elements/dropdown"

const HomeSectionOne = () => {

  const options = [
    {
      label: 'Apple',
      value: 'apple'
    },
    {
      label: 'Orange',
      value: 'orange'
    },
    {
      label: 'Banana',
      value: 'banana'
    }
  ]

  const tabs = [
    {
      id: 'Apple',
      control: <button>Apple</button>,
      panel: <div>Apple Panel</div>
    },
    {
      id: 'Orange',
      control: <button>Orange</button>,
      panel: <div>Orange Panel</div>
    },
  ]
  return (
    <section id="home-section-one">
      <h1>Home Section One</h1>
      <button>Test</button>
      <Dropdown options={options} />

      <Tabs tabs={tabs} />
    </section>
  )
}

export default HomeSectionOne