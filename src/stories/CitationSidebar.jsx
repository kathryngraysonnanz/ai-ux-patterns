import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@progress/kendo-react-buttons';
import { Drawer, DrawerContent, DrawerItem } from '@progress/kendo-react-layout';
import './citations.css';
import { SvgIcon } from '@progress/kendo-react-common';
import { hyperlinkOpenIcon } from '@progress/kendo-svg-icons';

/** The Citation Sidebar pattern is a good fit for situations where you want to provide in-depth contextual information without directing the user away from the current experience. The sidebar can be present all the time, as a persistent Panel, or optionally toggled by the user as an expandable Drawer. When the user clicks the source citation, the corresponding citation snippet is highlighted in the main content area.
 * 
 * Situations where the user only requires a direct link to the source content or a very small amount of additional information (i.e. the name of the source document or a short snippet of the relevant content) should use the In-Line Citation pattern instead. */

export const CitationSidebar = ({
  drawer = true,
}) => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(true);
  const [selectedCitation, setSelectedCitation] = useState(null);

  const CustomItem = ({ text, snippet, ...props }) => {
    return <DrawerItem {...props}>
      <div>
        <p style={{ fontWeight: 'bold' }}>{text}</p>
        <p>"{snippet}"</p>
        <Button size="xs" endIcon={<SvgIcon icon={hyperlinkOpenIcon} />}>View source material</Button>
      </div>
    </DrawerItem>;
  };

  const drawerItems = [
    {
      text: 'Source Title One',
      snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      selected: selectedCitation === 0,
    },
    {
      text: 'Source Title Two',
      snippet: '...quis nostrud exercitation...',
      selected: selectedCitation === 1,
    },
  ];

  return (
    <div className="citation-sidebar">
      <Drawer
        expanded={isDrawerExpanded}
        mode="push"
        position="end"
        width={320}
        items={drawerItems}
        item={CustomItem}
        className="citation-drawer"
        onSelect={({ itemIndex }) => setSelectedCitation(itemIndex)}
        onOverlayClick={() => setIsDrawerExpanded(false)}
      >
        <DrawerContent>
          <main onClick={() => setSelectedCitation(null)}>
            <p>
              <span className={selectedCitation === 0 ? 'citation-snippet citation-snippet-active' : 'citation-snippet'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '} Ut enim ad minim veniam,
              <span className={selectedCitation === 1 ? 'citation-snippet citation-snippet-active' : 'citation-snippet'}>
                quis nostrud exercitation 
              </span> ullamco laboris nisi ut. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

            { drawer && (
            <Button onClick={() => setIsDrawerExpanded((isExpanded) => !isExpanded)}>
                {isDrawerExpanded ? 'Hide citations' : 'Show citations'}
              </Button>
            )}
          </main>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

CitationSidebar.propTypes = {
  drawer: PropTypes.bool,
  panel: PropTypes.bool,
};
