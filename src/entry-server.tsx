import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './Redux/store';
import { rmApi } from './Redux/Reducers/apiSlice';

export async function render(
  url: string,
  options: RenderToPipeableStreamOptions
) {
  const store = setupStore();
  await store.dispatch(rmApi.endpoints.getCardsBySearch.initiate(''));

  const preloadedState = store.getState();
  const transformPreload = JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  );
  const injectPreload = () =>
    `<script>window.__PRELOADED_STATE__ = ${transformPreload}</script>`;

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );

  return { stream, injectPreload };
}
