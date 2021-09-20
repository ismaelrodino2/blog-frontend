import { DiscussionEmbed } from 'disqus-react';

export function Comments({ id, slug, title, allowComments }) {
  return (
    <div className="main-container">
      <DiscussionEmbed
        shortname="blog-do-ismael-rodino"
        config={{
          url: `/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </div>
  );
}
