import { useRef, useState } from 'react';

const useDataChange = (data) => {
  const [currentData, setCurrentData] = useState(data.overview);
  const [isChanging, setIsChanging] = useState(false);
  const [currentTab, setCurrentTab] = useState('overview');
  const prevTab = useRef('overview');
  const isTransitioned = useRef(true);
  const transitionDuration = 1000;
  const halfTransitionDuration = transitionDuration / 2;

  /**
   * Function to invoke changeContent() only when given conditions are met.
   * @param {Event} event Event from user click on element
   */
  const handleClick = (e) => {
    let curTab = e.target.dataset.type;
    if (!isTransitioned.current || prevTab.current === curTab) return false;
    changeContent(curTab);
  };
  /**
   * Function to change data.
   * @param {String} curTab Name of current tab
   */
  const changeContent = (curTab) => {
    prevTab.current = curTab;
    isTransitioned.current = false;
    setIsChanging(true);
    setCurrentTab(curTab);
    setTimeout(() => {
      isTransitioned.current = true;
      setIsChanging(false);
    }, transitionDuration);
    setTimeout(() => {
      setCurrentData(data[curTab]);
    }, halfTransitionDuration);
  };

  return [handleClick, currentData, currentTab, isChanging];
};

export default useDataChange;
