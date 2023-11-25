import { toast, url } from "./functions";
import { recordGroup, recordUiTemplate } from "./selectors";

export const createRecord = (record) => {
  const recordUi = recordUiTemplate.content.cloneNode(true);
  recordUi.querySelector("tr").setAttribute("data-id", record.id);
  recordUi.querySelector(".record-title").innerText = record.title;
  recordUi.querySelector(".record-short").innerText = record.short_name;
  recordUi.querySelector(".record-fee").innerText = record.fee;
  recordUi.querySelector(".record-id").innerText = record.id;
  return recordUi;
};

export const renderRecord = (lists) => {
  recordGroup.innerHTML = "";
  lists.forEach((list) => recordGroup.append(createRecord(list)));
};

export const removeRecord = (id) => {
  fetch(url("/courses/" + id), {
    method: "DELETE",
    redirect: "follow",
  }).then((res) => {
    if (res.status === 204) {
      toast("Record Deleted");
    }
  });
};
