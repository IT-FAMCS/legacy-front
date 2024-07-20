import { creatorsInfo } from "../constants/creators-info";
import { CreatorCard } from "../components/menu-card";

export default function CreatorsPage() {
  return (
    <div className="buttons">
      {creatorsInfo.map((creator) => {
        return (
          <CreatorCard
            key={creator.title}
            title={creator.title}
            tg={creator.tg}
            git={creator.git}
          />
        );
      })}
    </div>
  );
}
