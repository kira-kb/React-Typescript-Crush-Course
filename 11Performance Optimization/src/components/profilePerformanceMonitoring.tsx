import { Profiler } from "react";

const onRenderCallback = (
  id: string,
  phase: string,
  actualDuration: number
) => {
  console.log(
    `Rendered ${id} during ${phase} phase. Took ${actualDuration}ms.`
  );
};

const ChildComponent = () => (
  <p>Check the console to see statistics about this and the parrent element</p>
);

const ProfileParentComponent = () => {
  return (
    <Profiler id="ProfileParentComponent" onRender={onRenderCallback}>
      <ChildComponent />
    </Profiler>
  );
};

export default ProfileParentComponent;
