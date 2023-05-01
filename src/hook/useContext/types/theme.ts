/**
 * @useContext
 * 단계마다 일일이 props를 넘겨주지 않고도로 컴포넌트 트리 전체에 데이터를 제공할 수 있다.
 *
 * 주된 용도는 다양한 레벨에 네스팅 된 많은 컴포넌트에게 데이터를 전달할 때 사용하는 것
 * 사용시 컴포넌트를 재사용하기가 어려워지므로 필요할 때만 사용할 것
 */

export const light = {
  foreground: '#000000',
  background: '#eeeeee',
};

export const dark = {
  foreground: '#ffffff',
  background: '#222222',
};

export type Theme = typeof light;
