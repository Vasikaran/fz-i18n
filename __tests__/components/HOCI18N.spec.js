import HOCI18N from '../../src/components/HOCI18N';
import I18NProvider from '../../src/components/I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

var Test = props => <div>test{props.placeHolder}</div>;
Test.propTypes = {
  placeHolder: PropTypes.string
};
const defaultProps = {
  i18NKey: 'key1<b>vimal</b>'
};

describe('I18N component', () => {
  it('Should display i18n value', () => {
    Test = HOCI18N(['placeHolder'])(Test);
    var ele = renderer.create(
      <I18NProvider i18n={{ key1: 'vimal1' }}>
        <Test placeHolder="key1" />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display i18n key', () => {
    Test = HOCI18N(['placeHolder'])(Test);
    var ele = renderer.create(<Test placeHolder="key1" />);
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
