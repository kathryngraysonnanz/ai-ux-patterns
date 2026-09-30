import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { globeLinkIcon, hyperlinkOpenIcon } from '@progress/kendo-svg-icons';
import { Popover } from '@progress/kendo-react-tooltip';
import './citations.css';

/** The In-Line Citation pattern is a good fit for situations where you want to provide a direct link to the source content or a display a very small amount of additional information (i.e. the name of the source document or a short snippet of the relevant content). Situations where the user requires additional contextual information without being directed away from the current experience should use the Citation Sidebar pattern instead. */

export const InLineCitation = ({
  link = true,
  icon = false,
  tooltip = false,
  ...props
}) => {
  const citationLinkRef = useRef(null);
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    if (!showPopover) {
      return undefined;
    }

    const handleDocumentMouseDown = (event) => {
      const target = event.target;
      const clickedCitationLink = citationLinkRef.current?.contains(target);
      const clickedPopover = target instanceof Element && target.closest('.tooltip-content');

      if (!clickedCitationLink && !clickedPopover) {
        setShowPopover(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleDocumentMouseDown);
    };
  }, [showPopover]);

  return (
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut&nbsp;
      { link ? ( <>
        <a
          ref={citationLinkRef}
          href="#"
          aria-expanded={tooltip ? showPopover : undefined}
          onClick={(event) => {
            event.preventDefault();
            if (tooltip) {
              setShowPopover((isVisible) => !isVisible);
            }
          }}
        >
          aliquip ex ea commodo consequat.
        </a>
        {tooltip && (
          <Popover anchor={citationLinkRef.current} show={showPopover} position='bottom' className="tooltip-content">
            <p><b>Document Title</b></p>
            <p>"<i>...aliquip ex ea commodo consequat.</i> Vileat esse mollit anim quis nostrud."
            </p>
           <Button endIcon={<SvgIcon icon={hyperlinkOpenIcon} />} size="xs">Open source material</Button>
          </Popover>
        )}
      </>) : (<>aliquip ex ea commodo consequat.</>) 
       
       }
       
       {icon && 
      <a href="#" className="icon-link">
        <>
        Source Title
        <SvgIcon icon={globeLinkIcon} />
        </>
       
      </a>
       }
     &nbsp;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );
};

InLineCitation.propTypes = {
  link: PropTypes.bool,
  icon: PropTypes.bool,
  tooltip: PropTypes.bool,
};
