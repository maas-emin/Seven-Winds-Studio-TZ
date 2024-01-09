import React, { FC } from 'react'
import styles from './Sidebarmenu.module.scss'

enum MenuTypes {
  ПоПроекту = 'По проекту',
  Обекты = 'Обекты',
  РД = 'РД',
  МТО = 'МТО',
  СМЗ = 'СМР',
  Графика = 'Графика',
  МиМ = 'МиМ',
  Рабочие = 'Рабочие',
  Капвложения = 'Капвложения',
  Бюджет = 'Бюджет',
  Финансирование = 'Финансирование',
  Панорамы = 'Панорамы',
  Камеры = 'Камеры',
  Поручения = 'Поручения',
  Контрагенты = 'Контрагенты',
}

const Sidebar: FC = () => {
  return (
    <div>
      <div className={styles.sidebarheader}>
        <div className={styles.sidebarheader_container}>
          <div className={styles.sidebarheader_menu}>
            Название проекта
            <br />
            <span className={styles.sidebarheader_span}>абривеатура</span>
          </div>
          <div className={styles.sidebarheader_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_3_4487)">
                <path
                  d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_4487">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_menu_container}>
        {Object.values(MenuTypes).map((menu) => {
          return (
            <div className={styles.sidebar_menu} key={menu}>
              <div className={styles.sidebar_cat_menu}>
                <svg
                  className={styles.sidebar_cat_icon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_32926_11)">
                    <path
                      d="M2.75 11.9167H10.0833V2.75H2.75V11.9167ZM2.75 19.25H10.0833V13.75H2.75V19.25ZM11.9167 19.25H19.25V10.0833H11.9167V19.25ZM11.9167 2.75V8.25H19.25V2.75H11.9167Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_32926_11">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <button className={styles.sidebar_cat_title}>{menu}</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
