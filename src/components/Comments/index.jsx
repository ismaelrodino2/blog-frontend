import { DiscussionEmbed } from 'disqus-react';
import PropTypes from 'prop-types';

export function Comments({ id, slug, title, allowComments }) {
  if (!allowComments) return null;

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

Comments.propTypes = {
  id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  allowComments: PropTypes.boolean,
};
