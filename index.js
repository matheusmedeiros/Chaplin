class Chaplin {
  constructor(elementsIds) {
    this.elementsIds = elementsIds;
    this.components = {};
  }

  calcFloatPoint(from, to, floatPoint) {
    return (floatPoint - from) / (to - from);
  }

  lerp(v0, v1, t) {
    t = Math.min(1, t);
    t = Math.max(0, t);
    return v0 * (1 - t) + v1 * t;
  }

  moveElement(from, to, componentId, floatPoint) {
    let moveValueY = this.lerp(from.y, to.y, floatPoint);
    let moveValueX = this.lerp(from.x, to.x, floatPoint);

    this.components[
      componentId
    ].style.transform = `translate(${moveValueX}px, ${moveValueY}px)`;
  }

  createAnimation(animation) {
    const { componentId, moves } = animation;

    let floatPointBy = null;

    moves.forEach((move, index) => {
      let floatPoint = this.calcFloatPoint(
        move.scrollInterval.from,
        move.scrollInterval.to,
        window.scrollY
      );

      if (
        ((floatPointBy === null || floatPointBy === index) && floatPoint < 1) ||
        (moves.length === index + 1 && floatPoint > 1)
      ) {
        floatPointBy = index;

        this.moveElement(
          move.objectPositions.from,
          move.objectPositions.to,
          componentId,
          floatPoint
        );
      }
    });

    return this;
  }

  getComponents() {
    this.elementsIds.forEach(el => {
      this.components[el] = document.getElementById(el);
    });
  }

  init(animation) {
    this.getComponents(this.elementsIds);
    requestAnimationFrame(animation);
    addEventListener("scroll", () => {
      requestAnimationFrame(animation);
    });
  }
}
