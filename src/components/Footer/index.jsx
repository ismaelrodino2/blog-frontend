export const Footer = ({footerHtml}) => {
  return (
    <div>
      <div
        className="flex justify-center py-6 pt-10 main-container"
        dangerouslySetInnerHTML={{
          __html: footerHtml,
        }}
      ></div>
    </div>
  );
};
