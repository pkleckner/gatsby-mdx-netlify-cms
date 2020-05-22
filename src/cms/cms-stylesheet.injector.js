import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';

// Use Styled Components in CMS
const StylesheetInjector = ({ children }) => {
	const [iframeRef, setIframeRef] = useState(undefined);

	useEffect(() => {
		const iframe = document.querySelector('#nc-root iframe');
		const iframeHeadElem = iframe && iframe.contentDocument.head;
		setIframeRef(iframeHeadElem);
	}, []);

	return (
		<>
			{iframeRef && (
					<StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
			)}
		</>
	);
};

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StylesheetInjector>
      <>
        <Comp {...props} />
      </>
    </StylesheetInjector>
  );
}