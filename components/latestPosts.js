import React from 'react';
import { connect } from 'react-redux';

import PostTileV2 from './postTileV2';
import LoadingSVG from './loadingSVG';
import Link from 'next/link';

function LatestPosts(props) {
    const { latestPosts: data, latestPostLoading: loading } = props;

    const loader = (
        <div style={{ textAlign: 'center' }}>
            <LoadingSVG
                width='50px'
                height='50px'
                text='Please wait...'
            />
        </div>
    );

    return (
        <div className='container' style={{ padding: '50px 0px' }}>
            <div className='row'>
                <div className='col-sm-12 text-center' style={{ marginBottom: '50px' }}>
                    <h1>Latest Posts</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    {
                        loading ? loader :
                            data.map(post => (
                                <PostTileV2 post={post} key={post._id} />
                            ))
                    }
                </div>
            </div>
            {
                !loading &&
                <div className='row'>
                    <div className='d-flex justify-content-center col-sm-12 pad-top-50'>
                        <Link href='/blog'>
                            <div className='button-4'>
                                <div className='eff-4'></div>
                                <a>All Blogs</a>
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default connect(state => state.posts)(LatestPosts);
