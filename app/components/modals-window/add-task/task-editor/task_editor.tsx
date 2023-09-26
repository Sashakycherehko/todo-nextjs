import { SelectDate } from "./select_date";
import { SelectPriority } from "./select_priority";
import { TaskEditorInputs } from "./task_editor_inputs";

export const TaskEditor = () => {
  return (
    <>
      <div className="modal-task-editor">
        <TaskEditorInputs />
        <div className="modal-task-editor-option">
          <SelectDate />
          <SelectPriority />
          <div className="modal-task-editor_reminders">
            <div className="button-option">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.414 4.706l.094.093a.5.5 0 01-.707.708l-.094-.094a2 2 0 010-2.829l.379-.378a2 2 0 012.764-.062.5.5 0 01-.676.738 1 1 0 00-1.381.03l-.379.38a1 1 0 000 1.414zm9.412-1.824a1 1 0 011.381.03l.379.38a1 1 0 010 1.414l-.094.093a.5.5 0 10.707.708l.094-.094a2 2 0 000-2.829l-.379-.378a2 2 0 00-2.764-.062.5.5 0 10.676.738zm-.042 9.108A5.482 5.482 0 018 13.499a5.482 5.482 0 01-3.784-1.509l-1.362 1.362a.5.5 0 11-.708-.707l1.408-1.408a5.5 5.5 0 118.892 0l1.408 1.408a.5.5 0 01-.707.707l-1.363-1.362zM8 12.499a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM8 5v3h2a.5.5 0 110 1H7.5a.5.5 0 01-.5-.5V5a.5.5 0 111 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Reminders</span>
            </div>
          </div>
          <div className="modal-task-editor_other">
            <div className="button-option">
              <svg width="15" height="3">
                <path
                  d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
