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
  observerOption = {},
  ...props
}) => {
  const [ref, isVisible] = useElementOnScreen({
    ...observerDefaultOptions,
    ...observerOption,
  });

  useEffect(() => onIntersection?.(isVisible), [isVisible]);

  return (
    <section ref={ref} id={toCamel(title.toLowerCase())} className={`section ${className}`} {...props}>
      <h3 className={`section__title ${titleClassName}`}>{title}</h3>

      <article className={`section__content ${contentClassName}`}>
        {children}
      </article>
    </section>
  );
}

export default React.memo(Section);
