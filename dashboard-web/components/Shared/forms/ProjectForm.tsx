import { useContext, useState } from "react";

import { addProjectMembers, addProjects } from "../../../lib/services";

const ProjectForm = () => {
  const data: any = {};
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState({
    name: "",
  });

  function handleChange(event: any) {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  }

  function cancel() {}

  function onSuccess() {}

  function save() {
    const payload = {
      ...project,
      slug: project.name.replace(/\s+/g, "-").toLowerCase(),
    };
    setLoading(true);
    addProjects(payload).then((res) => {
      if (res) {
        addProjectMembers({
          user_id: data.user.sub,
          project_id: res.data.id,
          role: "Owner",
        }).then((member) => {
          setLoading(false);
          cancel();
          onSuccess();
        });
      } else {
        setLoading(false);
      }
    });
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={project.name}
          className="border border-gray-300 p-2 w-full"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-black text-white p-2 mr-4" onClick={cancel}>
          Cancel
        </button>
        <button className="bg-black text-white p-2 mr-4" onClick={save}>
          Create
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;
