import { useEffect, useState } from "react";
import { getInspirationsByUser } from "../services/inspirationService";


export default function InspirationList() {
  const [inspirations, setInspirations] = useState([]);

  const fetchData = async () => {
    const { data } = await getInspirationsByUser(1); // userId = 1
    setInspirations(data.content);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!inspirations || inspirations.length === 0) {
    return <p>No inspirations available.</p>;
  }

  return (
    <div>
      <h3>Inspirations</h3>
      <ul>
        {inspirations.map((i) => (
          <li key={i.id}>{i.source} ({i.type}) - Impact: {i.impactLevel}</li>
        ))}
      </ul>
    </div>
  );
}
