
import {Video} from 'kaleidoscopejs';
import {ContainerPlugin} from 'clappr';

export default class Video360 extends ContainerPlugin {
  constructor(container) {
    super(container);
    this.listenTo(this.container, 'container:fullscreen', this.updateSize);
    let {height, width, autoplay} = container.options;
    container.playback.el.setAttribute('crossorigin', 'anonymous');
    this.viewer = new Video({height, width, container: container.el, video: container.playback.el});
    this.viewer.render();
  }

  updateSize() {
    setTimeout(() =>
      this.viewer.renderer.setSize({height: this.container.$el.height(), width: this.container.$el.width()})
    , 250)
  }
}
