import * as React from 'react';
import styles from './dataBaseDev.module.css'
export interface IFrontendDevProps {
}

export interface IFrontendDevState {
}

export default class FrontendDev extends React.Component<IFrontendDevProps, IFrontendDevState> {
    constructor(props: IFrontendDevProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className={styles.backgroundColor}>
                <div className={styles.titleAnimation}>
                    <div className={styles.bigTitle}>
                        <a className={styles.projectsTitle}>Database</a>
                    </div>
                    <div className={styles.titleWrapper}>
                        <a className={styles.frontendTitle}>Heres some database!</a>
                    </div>
                </div>
                <div className={styles.divider}>
                    <div>
                    </div>
                    <div className={styles.boxWrapper2}>
                        <div className={styles.topYellow}>
                        </div>
                        <div className={styles.bottomWrapper}>
                            <div className={styles.leftYellow}>

                            </div>
                            <div className={styles.frontYellow}>
                                <a>Mysql</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.boxWrapper3}>
                        <div className={styles.topYellow}>
                        </div>
                        <div className={styles.bottomWrapper}>
                            <div className={styles.leftYellow}>
                            </div>
                            <div className={styles.frontYellow}>
                                <a>Neo4j</a>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        );
    }
}
