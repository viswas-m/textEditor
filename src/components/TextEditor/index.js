import './index.css'

import {useState} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

const TextEditor = () => {
  const [isBold, setIsBold] = useState(false)
  const [isItallic, setIsItallic] = useState(false)
  const [isUnderLine, setIsUnderLine] = useState(false)

  const bColor = isBold ? '#faff00' : '#f1f5f9'
  const iColor = isItallic ? '#faff00' : '#f1f5f9'
  const uColor = isUnderLine ? '#faff00' : '#f1f5f9'

  const bContent = isBold ? 'bold' : 'normal'

  const iContent = isItallic ? 'italic' : 'normal'

  const uContent = isUnderLine ? 'underline' : 'normal'

  const Bold = () => {
    setIsBold(c => !c)
  }

  const Itallic = () => {
    setIsItallic(c => !c)
  }

  const UnderLine = () => {
    setIsUnderLine(c => !c)
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <div className="left-cont">
          <h1>Text Editor</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div className="right-cont">
          <div className="btn-cont">
            <ul>
              <li>
                <button
                  onClick={Bold}
                  type="button"
                  className="icon-btn"
                  style={{color: bColor}}
                  aria-label="Bold"
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </button>
              </li>
              <li>
                <button
                  onClick={Itallic}
                  type="button"
                  className="icon-btn"
                  style={{color: iColor}}
                  aria-label="Italic"
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </button>
              </li>
              <li>
                <button
                  onClick={UnderLine}
                  type="button"
                  className="icon-btn"
                  style={{color: uColor}}
                  aria-label="Underline"
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </button>
              </li>
            </ul>
          </div>
          <hr />
          <textarea
            style={{
              fontWeight: bContent,
              fontStyle: iContent,
              textDecoration: uContent,
            }}
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  )
}

export default TextEditor
