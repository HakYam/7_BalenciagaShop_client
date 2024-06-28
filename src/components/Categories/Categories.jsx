import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

export const Categories = () => {
    return (
        <div className='container-fluid '>
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <img src='https://images.unsplash.com/photo-1707592996388-2a2d82138709?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Summer' />
                    <button>
                        <Link className='link' to={'/products/1'}>Summer</Link>
                    </button>
                </div>
                <div className='row'>
                    <img src='https://images.unsplash.com/photo-1630568667432-0fa3609f0a32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Women' />
                    <button>
                        <Link className='link' to={'/products/1'}>Women</Link>
                    </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src='https://images.unsplash.com/photo-1690221507507-44082e42756c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='New Collection' />
                    <button>
                        <Link className='link' to={'/products/1'}>New Collection</Link>
                    </button>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img src='https://images.unsplash.com/photo-1630567136459-7a8fa832c80e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Special' />
                            <button>
                                <Link className='link' to={'/products/1'}>Special</Link>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img src='https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Sale' />
                            <button>
                                <Link className='link' to={'/products/1'}>Sale</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://images.unsplash.com/photo-1630567804054-3a8c5916d1db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Balenciaga' />
                    <button>
                        <Link className='link' to={'/products/1'}>Balenciaga</Link>
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}
