import React from 'react';
import FilterLink from '../containers/FilterLink';

// Footerの実体は<p>~</p>に囲まれた3種類のフィルタリングリンク
class Footer extends React.Component {
  render() {
    return (
      <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    );
  }
}

export default Footer;
