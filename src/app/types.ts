import { Observable, of } from 'rxjs';
import { map, first} from 'rxjs/operators';

export abstract class Composite {
  id: string;

  abstract accept(visitor: CompositeVisitor): Composite;
}

export class Container extends Composite {
  children: Composite[] = new Array<Composite>();

  constructor(id: string) {
    super();
    this.id = id;
  }

  removeChild(id: Composite) {
    const index = this.children.indexOf(id, 0);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  accept(visitor: CompositeVisitor): Container {
    return visitor.handleContainer(this);
  }
}

export class Containee extends Composite {  
  constructor(id: string) {
    super();
    this.id = id;
  }

  accept(visitor: CompositeVisitor): Containee {
    return visitor.handleContainee(this);
  }
}

export abstract class CompositeVisitor {

  abstract handleContainer(container: Container);
  abstract handleContainee(containee: Containee);
}

export class Constants {

  private static initialized: boolean;
  private static containerIds: string[];
  private static rootContainer: Container;

  public getContainerIds(): string[] {
    return Constants.containerIds;
  }

  public getRootContainer(): Container {
    return Constants.rootContainer;
  }

  constructor() {
    Constants.initialize();
  }

  private static initialize() {
    if (!Constants.initialized) {
        Constants.initialized = true;

        Constants.rootContainer = new Container('root');

        const container = new Container('0');
        var children = new Array<Composite>();
        children.push(new Containee('1'));
        children.push(new Containee('2'));
        children.push(new Container('3'));
        container.children = children;
        
        children = new Array<Composite>();

        children.push(container)
        children.push(new Containee('4'))
        children.push(new Containee('5'))
        Constants.rootContainer.children = children;

        Constants.containerIds = ['root', '0', '3'];
    }
  }
  
}