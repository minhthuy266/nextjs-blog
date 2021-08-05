import headerStyles from "../styles/Header.module.css"

// Style in JS example :))

const Header = () => {
  const x = 2
  return (
    <div>
      <h1 className="title">
        <span>WebDev</span> News
      </h1>

      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  )
}

export default Header
