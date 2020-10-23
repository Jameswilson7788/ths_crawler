export const getDocumentHTML = () => {
  return document.documentElement.outerHTML;
};

export const getPageHtml = async (url) => {
  const response = await fetch(url);
  return await response.text();
};

export const extractLectureInfos = async (coursePageHTML) => {
  const response = await fetch("http://127.0.0.1:4413/extractLectures", {
    method: "POST",
    body: coursePageHTML,
    headers: {
      "Content-Type": "text/html",
    },
  });
  return await response.json();
};

export const downloadLecture = async (lecturePageHTML) => {
  await fetch("http://127.0.0.1:4413/downloadLecture", {
    method: "POST",
    body: lecturePageHTML,
    headers: {
      "Content-Type": "text/html",
    },
  });
};
