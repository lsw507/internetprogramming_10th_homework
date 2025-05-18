import { useState } from 'react';

function TechList() {
  const [likes, setLikes] = useState(0);
  const techs = ['React', 'Python', 'AI 교육', 'HTML/CSS'];

  return (
    <div>
      <h2>관심 기술</h2>
      <ul>
        {techs.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <button onClick={() => setLikes(likes + 1)}>
        이 페이지가 마음에 들어요! ❤️ ({likes})
      </button>
    </div>
  );
}
export default TechList;
