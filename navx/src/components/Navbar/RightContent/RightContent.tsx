import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/Auth/AuthModal';

const RightContent: React.FC = () => {
    return (
        <>
            <AuthModal />
            <Flex justify='center' align='center'>
                <AuthButtons/>
            </Flex>
        </>
    )
};
export default RightContent;