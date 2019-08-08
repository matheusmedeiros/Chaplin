class Chaplin {
  constructor(elementsIds) {
    this.elementsIds = elementsIds;
    this.components = {}
  };

  calcLerpRange(start, finish, length) {
    return (length - start) / (finish - start);
  };

  lerp(v0, v1, t) {
    t = Math.min(1, t);
    t = Math.max(0, t);
    return (v0 * (1 - t)) + (v1 * t);
  }

  moveElement(startPosition, finishPosition, componentId, range) {
    let moveValueY = this.lerp(startPosition.y, finishPosition.y, range);
    let moveValueX = this.lerp(startPosition.x, finishPosition.x, range);

    this.components[componentId].style.transform = `translate(${moveValueX}px, ${moveValueY}px)`;
  }

  createAnimation(animation) {
    const { componentId, moves } = animation;

    let rangeUsedBy = null;

    moves.forEach((move, index) => {
      let range = this.calcLerpRange(move.scrollInterval.start, move.scrollInterval.finish, window.scrollY);

      if (((rangeUsedBy === null || rangeUsedBy === index) && range < 1) || (moves.length === index + 1 && range > 1)) {
        rangeUsedBy = index;

        this.moveElement(
          move.objectPositions.start,
          move.objectPositions.finish,
          componentId,
          range
        );
      }
    });

    return this;
  }

  getComponents() {
    this.elementsIds.forEach((el) => {
      this.components[el] = document.getElementById(el);
    });
  }

  init(animation) {
    this.getComponents(this.elementsIds);
    requestAnimationFrame(animation);
    addEventListener('scroll', () => {
      requestAnimationFrame(animation);
    })
  }
}
