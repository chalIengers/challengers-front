import { useEffect, useState } from 'react';
import { ProjectCrew } from '../../../types/globalType';

const useProjectCrew = (data: ProjectCrew[] | undefined) => {
  const [groupedByPosition, setGroupedByPosition] = useState<{ [position: string]: ProjectCrew[] }>(
    {},
  );

  useEffect(() => {
    if (data) {
      const groupedData: { [position: string]: ProjectCrew[] } = {};
      data.forEach((member) => {
        if (!groupedData[member.position]) {
          groupedData[member.position] = [];
        }
        groupedData[member.position].push(member);
      });
      setGroupedByPosition(groupedData);
    }
  }, [data]);

  return groupedByPosition;
};

export default useProjectCrew;
