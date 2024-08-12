import { useState } from 'react';
import styles from './styles.module.css';

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 },
  ]);

  const deletePeople = (id) => {
    const newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };

  return (
    <div className={styles.list_container}>
      <h3>Список приглашенных</h3>
      <ul className={styles.list}>
        {people.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - {item.age} years old
            </span>
            <button
              onClick={() => {
                deletePeople(item.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
