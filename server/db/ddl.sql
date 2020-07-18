create table if not exists `tasks`(
    task_id bigint unsigned not null auto_increment,
    content char(20) default null,
    created_at timestamp null,
    primary key(task_id)
);