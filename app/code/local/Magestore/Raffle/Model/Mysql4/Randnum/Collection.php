<?php

class Magestore_Raffle_Model_Mysql4_Randnum_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
	public function _construct(){
		parent::_construct();
		$this->_init('raffle/randnum');
	}
}