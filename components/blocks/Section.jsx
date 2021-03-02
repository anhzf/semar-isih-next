import React, { useEffect } from 'react';
import useElementOnScreen from 'hooks/useElementOnScreen';
import { toCamel } from 'utils/string';

const observerDefaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: .2,
};

const Section = ({
  title,
  className,
  contentClassName,
  titleClassName,
  children,
  onIntersection,
  ...props
}) => {
  const [ref, isVisible] = useElementOnScreen(observerDefaultOptions);

  useEffect(() => onIntersection?.(isVisible), [isVisible]);

  return (
    <section ref={ref} id={toCamel(title.toLowerCase())} className={className || 'w-full relative px-16 py-24'} {...props}>
      <h3 className={titleClassName || 'my-10 font-semibold text-4xl text-center text-blue-500'}>{title}</h3>

      <article className={`w-full py-4 ${contentClassName || 'flex flex-col justify-center'}`}>
        {children}
      </article>
    </section>
  );
}

export default React.memo(Section);
