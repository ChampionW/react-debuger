
  function FiberRootNode(containerInfo, tag, hydrate) {
    this.tag = tag;
    this.containerInfo = containerInfo;
    this.pendingChildren = null;
    this.current = null;
    this.pingCache = null;
    this.finishedWork = null;
    this.timeoutHandle = noTimeout;
    this.context = null;
    this.pendingContext = null;
    this.hydrate = hydrate;
    this.callbackNode = null;
    this.callbackPriority = NoLanePriority;
    this.eventTimes = createLaneMap(NoLanes);
    this.expirationTimes = createLaneMap(NoTimestamp);
    this.pendingLanes = NoLanes;
    this.suspendedLanes = NoLanes;
    this.pingedLanes = NoLanes;
    this.expiredLanes = NoLanes;
    this.mutableReadLanes = NoLanes;
    this.finishedLanes = NoLanes;
    this.entangledLanes = NoLanes;
    this.entanglements = createLaneMap(NoLanes);

    {
      this.mutableSourceEagerHydrationData = null;
    }

    {
      this.interactionThreadID = unstable_getThreadID();
      this.memoizedInteractions = new Set();
      this.pendingInteractionMap = new Map();
    }

    {
      switch (tag) {
        case BlockingRoot:
          this._debugRootType = 'createBlockingRoot()';
          break;

        case ConcurrentRoot:
          this._debugRootType = 'createRoot()';
          break;

        case LegacyRoot:
          this._debugRootType = 'createLegacyRoot()';
          break;
      }
    }
  }

  function createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks) {
    var root = new FiberRootNode(containerInfo, tag, hydrate);
    // stateNode is any.


    var uninitializedFiber = createHostRootFiber(tag);
    // 互相绑定
    // root.current 绑定当前的container的fiber节点
    root.current = uninitializedFiber;
    // 一个fiber节点所对应的dom节点
    uninitializedFiber.stateNode = root;
    initializeUpdateQueue(uninitializedFiber);
    return root;
  }