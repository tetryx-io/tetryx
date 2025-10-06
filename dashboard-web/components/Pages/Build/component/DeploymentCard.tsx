import React from 'react';
import { format } from 'date-fns';
import { RiTimeLine, RiUser3Line, RiCalendarLine } from 'react-icons/ri';

interface DeploymentCardProps {
  status: string;
  duration: number;
  userName: string;
  createdAt: string;
}

const DeploymentCard: React.FC<DeploymentCardProps> = ({ status, duration, userName, createdAt }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-grow">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
          <div className="flex items-center text-gray-600">
            <RiTimeLine className="mr-2" />
            <span>{duration}s</span>
          </div>
          <div className="flex items-center text-gray-600">
            <RiUser3Line className="mr-2" />
            <span>{userName}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <RiCalendarLine className="mr-2" />
            <span>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentCard;