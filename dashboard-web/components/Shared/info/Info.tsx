const Info = () => {
  return (
    <div className="p-4">
      <h1 className="text-blue-500 text-2xl font-bold">
        Reframe’s GPT model exploration tool
      </h1>
      <p className="text-black text-md mt-4">
        Thanks for using our ChatGPT visualization tool! With this tool, you can
        visualize how OpenAI’s GPT model associates different questions and
        answers.
        <br /> To start, click the “Submit” button and input the question you
        asked GPT (e.g., ChatGPT, or the GPT-3 playground) along with the answer
        you received. Our tool will then query the GPT API to retrieve the
        “vector embedding” that corresponds to your question and answer.
        <br />
        These vector embeddings are how large language models like GPT “see” the
        text that they receive and output. The embeddings themselves are vectors
        with many hundreds of dimensions. We then apply a dimensionality
        reduction technique known as UMAP to render each question and answer in
        3D for you to explore.
        <br /> Try it out! You can use the select tools at left to select groups
        of points to see the questions people are asking and how they are
        related to each other! You can also click individual points to see what
        they are, and better understand each cluster of data.
        <br /> Thanks for visiting, if you have any questions or feedback,
        please send an email to founders@reframe.is.
      </p>
    </div>
  );
};

export default Info;
