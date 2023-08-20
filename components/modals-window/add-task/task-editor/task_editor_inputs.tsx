export const TaskEditorInputs = () => {
  return (
    <>
      <div className="modal-task-editor_name" contentEditable="true">
        <p className="modal-task-editor__content_name">Task name</p>
      </div>

      <div className="modal-task-editor_description" contentEditable="true">
        <p className="modal-task-editor__content_name">Description</p>
      </div>
    </>
  );
};
